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
                echo 'npm install'
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
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
