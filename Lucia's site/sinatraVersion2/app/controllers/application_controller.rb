class App < Sinatra::Base
  configure do
    set :public_folder, 'public'
    set :session_secret, 'password_security'
    set :views, 'app/views'
  end

  get '/' do
    erb :index
  end


  post "/addEmail" do
    addy = Email.create(:fname=>params["fname"])
    addy.name = params["lname"]
    addy.email = params["email"]
    addy.save
    redirect "/"
  end

  get "/admin" do
    if params["retrieve"] == "all"
      @list = Email.find_each
    else
      @list = Email.find_by(fname: params["firstname"])
    end
     erb :admin
  end

  get '/:page' do
    erb :"#{params['page']}"
  end

end
