package main

import (
	"html/template"
	"net/http"
)

var tpl *template.Template

func init() {
	tpl = template.Must(template.ParseFiles("index.html"))
}

func main() {
	http.HandleFunc("/", index)
	// requires file server to serve files on page.
	http.Handle("/resources/", http.StripPrefix("/resources", http.FileServer(http.Dir("./resources"))))
	http.Handle("/vendors/", http.StripPrefix("/vendors", http.FileServer(http.Dir("./vendors"))))
	http.ListenAndServe(":8080", nil)
}

func index(w http.ResponseWriter, req *http.Request) {

	/*
		if req.Method == http.MethodPost {
			// get form fields values
			n := req.FormValue("name")
			e := req.FormValue("email")
			m := req.FormValue("message")

			// Check the data
			if n == nil || e == nil || m == nil {

			}

			//

			err := req.ParseForm()
			if err != nil {
				log.Fatalln(err)
			}

		}
	*/
	tpl.ExecuteTemplate(w, "index.html", nil)
}
