const exec = require('child_process').exec

const TYPE = process.env.BUILD
const DATE = Date.now()
const props = {}

function execute (command) {
  return new Promise((resolve, reject) => {
    exec(command, { stdio: [0, 1, 2] }, (error, stdout, stderr) => {
      if (error || stderr) {
        reject(error, stderr)
      } else {
        resolve(stdout)
      }
    })
  })
}

function getGitInfo () {
  return Promise.all([
    execute('git config user.name'),
    execute('git config user.email')
  ])
}

// Potential Types: [prepatch, preminor, premajor, prerelease]
// Ecnouraged Types: [patch, minor, major] patch is the default so it is not passed
function build (gitParams) {
  console.info('gitParams', gitParams)
  props.name = gitParams[0].replace('\n', '')
  props.email = gitParams[1].replace('\n', '')
  const installCommands = `git pull origin master && npm install && npm run build`

  return Promise.all([
    execute(installCommands),
    execute(`npm version ${TYPE || 'patch'} -m "${props.name} bumped the version to %s for ${TYPE || 'patch'} deployment on ${DATE}"`)
  ])
}

function deploy (values) {
  console.log('values', values)
  return Promise.all([
    execute(`git commit -am "Production Distribution Build from ${props.name}, ${props.email} on ${DATE}"`),
    execute(`git push origin master`)
  ])
}

getGitInfo()
  .then(build)
  .then(deploy)
  .then(() => {
    console.log('all done')
  })
  .catch((error) => {
    console.log('error', error)
  })
