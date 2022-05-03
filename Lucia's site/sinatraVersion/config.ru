require './config/environment'
if ActiveRecord::Base.connection.migration_context.needs_migration?#ActiveRecord::Migrator.needs_migration?
  raise 'Migrations are pending. Run `rake db:migrate` to resolve the issue.'
end
use Rack::MethodOverride

run App
