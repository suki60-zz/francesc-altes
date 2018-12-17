require 'sinatra'

if development?
  require "sinatra/reloader"
  require 'pry'
  require "better_errors"
end

configure :development do
  use BetterErrors::Middleware
  BetterErrors.application_root = __dir__
end

get '/' do
  @path = :home
  slim :home
end
