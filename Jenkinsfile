pipeline {
    agent any

    tools { nodejs 'Node20.6.0' }

    stages {
        stage('Clean workspace') {
            steps {
                deleteDir()
            }
        }
        stage('Dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('e2e Tests') {
            steps {
                sh 'npm run test'
            }
        }
    }
    post {
        always {
            sh 'npx mochawesome-merge "cypress/results/*.json" > mochawesome.json'
            sh 'npx marge mochawesome.json'
            echo 'Report: /Users/luca.seccia/.jenkins/workspace/test2/mochawesome-report/mochawesome.html'
            echo 'Stato finale della pipeline'
        }
    }
}
