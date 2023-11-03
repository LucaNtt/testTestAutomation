pipeline{
    agent any
    parameters{
        string(name: 'SPEC', defaultValue: 'cypress/integration/**/**', description: 'Enter the description')
        choice(name: 'BROWSER', choices: ['chrome', 'Safari'], description: 'description')
    }
    options{
        ansiColor('xterm')
    }

    stages{
        stage('Bulding') {
            echo 'building qualcosa'
        }
        stage('Testing') {
            steps {
                bat 'npn i'
                bat "npm run test"
            }
        }
        stage('Deploying') {
            echo "Deploy some..."
        }
    }
    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTML Report', reportTitles: '', useWrapperFileDirectly: true])
        }
    }
}

