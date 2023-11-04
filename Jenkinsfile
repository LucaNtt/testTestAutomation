pipeline {
    agent any

    tools { nodejs 'Node20.6.0' }

    stages {
        stage('Dependencies') {
            steps {
                sh 'npm i'
                sh 'npm install lambdatest-cypress-cli'
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
            sh 'npm mochawesome-merge "cypress/results/*.json" > mochawesome.json'
            sh 'npm marge mochawesome.json'
            echo ''
            echo 'Stato finale della pipeline'
        }
    }
}
