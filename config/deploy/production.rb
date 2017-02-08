set :branch, ENV["CI_BRANCH"]
set :user, :ubuntu

role :app, %w{www.test.com}
role :web, %w{www.test.com}

set :deploy_to, '/opt/www/imhere-angular-starter'

set :ssh_options, {
  user: fetch(:user),
  auth_methods: %w(publickey),
  keys: [
    File.join(ENV['HOME'], '.ssh', 'id_rsa'),
    File.join(ENV['HOME'], '.ssh', 'production.pem')
  ],
}
