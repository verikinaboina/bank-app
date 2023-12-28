/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any

    stages {
        stage('check out scm') {
            when {
                branch 'main'
            }
            steps {
                checkout scm
            }
        }
        stage('Install npm') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'npm run build'
            }
        }
        stage('Test') {
            steps {
                echo 'npm run test:watch'
            }
        }
        stage('Lint') {
            echo 'ng lint'
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
