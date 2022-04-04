from flask import Flask, render_template, send_from_directory, Blueprint
app=Flask(__name__, static_folder="../client/build", static_url_path='/')
#some_blueprint = Blueprint('some_blueprint',__name__, static_folder="../client/build/Projects/FightingProject01", static_url_path='/',url_prefix='/')

@app.route('/')
def index():
	return app.send_static_file('index.html')

@app.route('/FightingGame01')
def home():
	return app.send_static_file('Projects/FightingProject01/index.html')

@app.route('/airbnbclone')
def airbnb():
	return app.send_static_file('Projects/airbnbclone/build/index.html')

@app.route('/teacozy')
def teacozy():
	return app.send_static_file('Projects/TeaCozy/index.html')

@app.route('/classic')
def classic():
	return app.send_static_file('Projects/classicSite/layout.html')

@app.route('/bookreview')
def bookreview():
	return app.send_static_file('Projects/bookreview/build/index.html')

@app.route('/memegenerator')
def memegenerator():
	return app.send_static_file('Projects/memegenerator/build/index.html')



#@some_blueprint.route('/test')
#def test():
#	return some_blueprint.send_static_file('index.html')


#app.register_blueprint(some_blueprint)

#@app.route('/test')
#def test():
#	return app.send_static_file('../airbnbclone/buildlayouttest.html')

if __name__=="__main__":
	app.run(debug=True)