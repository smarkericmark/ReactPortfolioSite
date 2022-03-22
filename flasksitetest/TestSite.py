from flask import Flask, render_template, send_from_directory, Blueprint
app=Flask(__name__, static_folder="../client/build", static_url_path='/')
some_blueprint = Blueprint('some_blueprint',__name__, static_folder="../client/build/Projects/airbnbclone/build", static_url_path='/',url_prefix='/')

@app.route('/')
def index():
	return app.send_static_file('index.html')

@app.route('/home')
def home():
	return app.send_static_file('FolderTest/layouttest.html')

@some_blueprint.route('/test')
def test():
	return some_blueprint.send_static_file('index.html')


app.register_blueprint(some_blueprint)

#@app.route('/test')
#def test():
#	return app.send_static_file('../airbnbclone/buildlayouttest.html')

if __name__=="__main__":
	app.run(debug=True)