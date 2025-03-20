pipeline {
    agent any

    tools {
        nodejs('NodeJS-22.14.0')
    }

    options {
        ansiColor('xterm')
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Actualizar repositorio') {
            steps {
                echo 'Actualizar repositorio.'
                sh 'apt-get update'
            }
        }
        stage('Instalar dependencias de Cypress') {
            steps {
                echo '************** Instalar dependencias de Cypress. **************'
                sh '''
                    apt-get install wget
                    apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libnss3 libxss1 libasound2 libxtst6 xauth xvfb -y
                '''
            }
        }
        stage('Instalar dependencias del proyecto') {
            steps {
                echo '************** Revisar version de NodeJS y npm **************'
                sh 'node --version'
                sh 'npm --version'
                echo 'Instalar dependencias del proyecto.'
                sh 'npm install'
            }
        }
        stage('Construir el proyecto') {
            steps {
                echo '************** Construir el proyecto. **************'
                sh 'npm run build'
            }
        }
        stage('Iniciar aplicacion y pruebas') {
            steps {
                echo '************** Iniciar aplicacion. **************'
                sh 'npm run start &'
                echo '************** Iniciar pruebas. **************'
                sh 'npm run test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/*, cypress/screenshots/**/*', 
            allowEmptyArchive: true,
            followSymlinks: true
        }
    }
}