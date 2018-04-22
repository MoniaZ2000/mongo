// db = connect("localhost:27017/films");

use films

db.film.insert(
{
	"title":"Marsjanin",
	"year": 2014, 
	"director": {
		"first_name": "Ridley", 
		"last_name": "Scott", 
		"birthday": "1976-05-02"
		}
	}
)

db.film.find({"director.last_name": "Scott"})