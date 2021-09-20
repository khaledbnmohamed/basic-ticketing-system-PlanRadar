namespace :seed do
  desc 'create users and tickets seed'
  task create_seeds: :environment do
    FactoryBot.create_list(:ticket, 20)
  end
end
