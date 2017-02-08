# config/deploy.rb

lock '3.6.0'

# application settings
set :application, 'imhere-angular-starter'
set :repo_url, "git@github.com:imheretw/imhere-angular-starter.git"
set :deploy_to, '/opt/www/imhere-angular-starter'
set :scm, :git

# others settings
set :format, :pretty
set :log_level, :debug
set :pty, true
set :keep_releases, 5
set :linked_dirs, %w{node_modules jspm_packages}
set :linked_files, %w(src/common/config/appConfig.json)

# nvm settings
set :nvm_type, :user # or :system, depends on your nvm setup
set :nvm_node, 'v6.2.2'
set :nvm_map_bins, %w{node yarn gulp}
set :nvm_node_path, -> {
  if fetch(:nvm_type, :user) == :system
    '/usr/local/nvm/'
  else
    "$HOME/.nvm/"
  end
}

# rvm settings
set :rvm_map_bins, %w{ruby gulp}

# yarn setting
set :yarn_flags, '' # default
set :yarn_roles, :all                                      # default
set :yarn_env_variables, {}                                # default

# gulp tasks
set :gulp_tasks, 'release'

# hooks
namespace :deploy do
  after :updated, :gulp
end
