/* groovylint-disable-next-line CompileStatic */
pipeline {
    agent any

    stages {
        stage('Checkout') {
            //disable to recycle workspace data to save time/bandwidth
            deleteDir()
            checkout scm

        //enable for commit id in build number
        //env.git_commit_id = sh returnStdout: true, script: 'git rev-parse HEAD'
        //env.git_commit_id_short = env.git_commit_id.take(7)
        //currentBuild.displayName = "#${currentBuild.number}-${env.git_commit_id_short}"
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
