class CV {
	/**
	 * This method create each part of the CV.
	 * @name constructor
	 */
	constructor() {
		let square = document.getElementById("page")
		square.appendChild(this.createPicture("pictures/id_picture.png"))
		square.appendChild(this.createHeader("Gilles HUBERT", [
			this.createBirthInformations(21, 8, 1997),
			"5 lieu-dit Mirlange",
			"Hirel, France 35120",
			"(+33) 6 67 62 57 48",
			"gilles.hubert97@gmail.com"
		]))
		square.appendChild(this.createTitle("Diplômé de l'école ISEN :<br>Institut Supérieur de l'Électronique et du Numérique"))
		square.appendChild(this.createTable(
			"Formation", [
			[
				"Formation Pôle Emploi", [
					"<span class=\"bold\">AFPA</span> (Saint-Malo) - du 27 Septembre 2021 au 3 Février 2022",
					"Formation de Développeur Web (PHP et React)."
				]
			], [
				"École Supérieure", [
					"<span class=\"bold\">ISEN</span> (Lille) - 2015 à 2020",
					"Fomation ingénieur - Domaine Professionnel : Robotique Mobile."
				]
			], [
				"Diplôme d'anglais", ["<span class=\"bold\">Cambridge English: First (FCE)</span> - 2019 - Niveau B2 Grade C"]
			]
		]
		))
		square.appendChild(this.createTable(
			"Expériences professionnelles", [
			[
				"Stage de fin d'études", [
					"<span class=\"bold\">IpsoSenso</span> - Mars 2020 à Août 2020",
					"Réalisation de sites et d'applications web à l'aide de Java6, du framework Struts2 et/ou de la bibliothèque JS React."
				]
			], [
				"Réalisation d'un AGV", [
					"<span class=\"bold\">Prog'HEI & Radiante</span> - de Février 2020 à Décembre 2020",
					"Groupe de 3 personnes. Logiciel utilisé : Arduino",
					"Programmation d'un robot AGV transporteur se déplaçant par optoguidage dans un entrepôt."
				]
			]
		]
		))
		square.appendChild(this.createTable(
			"Projets personnels", [
			[
				"Projet Laboratoire", [
					"<a href=\"https://github.com/GillouH/Laboratory\">https://github.com/GillouH/Laboratory</a> - Depuis le 22 Juillet 2021",
					"Développement d'une architecture Serveur en Python (Socket - TCP) avec une connection sécurisée, permettant d'y ajouter des services simplement."
				]
			], [
				"Manager de mot de passes", [
					"Non disponible sur GitHub",
					"Script Python permettant de (dé)crypter un fichier de mot de passe."
				]
			], [
				"Gestionnaire de stocks", [
					"<a href=\"https://github.com/GillouH/TestStock\">https://github.com/GillouH/TestStock</a> - du 27 Novembre 2020 au 14 Avril 2021",
					"Développement d'une application Android permettant la gestion de stock (création d'item, personnalisation des quantités, et seuil de notification)."
				]
			], [
				"Gestionnaire de compte bancaire", [
					"<a href=\"https://github.com/GillouH/GenerateExcel\">https://github.com/GillouH/GenerateExcel</a> - Juillet 2021",
					"Développement d'un script Python permettant de générer un fichier Excel avec un template afin de suivre ses dépenses et le solde en parallèle du compte."
				]
			]
		]
		))
		square.appendChild(this.createTable(
			"Projets étudiants", [
			[
				"Projet Heron", [
					"<span class=\"bold\">ISEN (Lille)</span> - de Septembre 2019 à Février 2020",
					"Groupe de 10 personnes. Environnement technique : Python, ROS, Linux",
					"Programmation d'un robot AGV transporteur se déplaçant par géoguidage dans un local de démonstration."
				]
			], [
				"Projet HoloBot", [
					"<span class=\"bold\">ISEN (Lille)</span> - de Octobre 2018 à Septembre 2018",
					"Groupe de 4 personnes. Environnement technique : Unity, Visual Studio, Linux",
					"Création d'une interface pour HoloLens permettant de contrôler un robot Hexapode par le biais d'un serveur. Ce projet s'inscrit dans la réalisation d'un entrepôt intelligent."
				]
			]
		]
		))
		square.appendChild(this.createTable(
			"Savoir-être", [
			[
				"Social", ["Bienveillant, transmission, confiance"]
			], [
				"Professionnel", ["Persévérant, volontaire, curieux"]
			], [
				"Valeurs", ["Implication, respect, reconnaissance"]
			]
		]
		))
	}

	/**
	 *
	 * @param {string}
	 * @returns {HTMLElement}
	 */
	createPicture(imgSrc) {
		let img = document.createElement("img")
		img.setAttribute("id", "IDPicture")
		img.setAttribute("src", imgSrc)
		img.setAttribute("alt", "photo d'identité")
		return img
	}

	/**
	 * This method create the top of the CV.
	 * @name createHeader
	 * @param {string} name
	 * @param {string[]} informations
	 * @return {HTMLElement}
	 */
	createHeader(name, informations) {
		let header = document.createElement("header")

		let title = document.createElement("h2")
		title.setAttribute("id", "name")
		title.appendChild(document.createTextNode(name))
		header.appendChild(title)

		let list = document.createElement("ul")
		list.setAttribute("id", "contactInformation")
		informations.forEach(info => {
			let element = document.createElement("li")
			element.innerHTML = info
			list.appendChild(element)
		})
		header.appendChild(list)

		return header
	}

	/**
	 * This method return a string at format "birthdate - âge".
	 * @name createBirthInformations
	 * @param {number} birthDay
	 * @param {number} birthMonth
	 * @param {number} birthYear
	 * @returns {string}
	 */
	createBirthInformations(birthDay, birthMonth, birthYear) {
		let birthDate = new Date(birthYear, birthMonth - 1, birthDay)
		let age = new Date(Date.now() - birthDate).getYear() - 70
		let dateOptions = {
			day: "numeric",
			month: "long",
			year: "numeric"
		}
		return "<span class=capitalize>" + birthDate.toLocaleString("fr-FR", dateOptions) + "</span> - " + age.toString() + " ans"
	}

	/**
	 * This method create the title of the CV.
	 * @name createTitle
	 * @param {string} title
	 * @return {HTMLElement}
	 */
	createTitle(title) {
		let titleElement = document.createElement("h1")
		titleElement.innerHTML = title
		return titleElement
	}

	/**
	 * This method create a table in the CV.
	 * @name createTable
	 * @param {string} title
	 * @param {object[]} lines
	 * @return {HTMLElement}
	 */
	createTable(title, lines) {
		let table = document.createElement("table")
		table.setAttribute("class", "categorie")
		table.appendChild(this.createTableHead(title))
		table.appendChild(this.createTableBody(lines))
		return table
	}

	/**
	 * This method create the table head.
	 * @name createTableHead
	 * @param {string} title
	 * @returns {HTMLTableSectionElement}
	 */
	createTableHead(title) {
		let thead = document.createElement("thead")
		thead.appendChild(this.createTableLine(["<img class=\"blue_line\" src=\"pictures/blue_line.jpg\">", [title]]))
		return thead
	}

	/**
	 * This method create the table body.
	 * @name createTableBody
	 * @param {object[]} lines
	 */
	createTableBody(lines) {
		let tbody = document.createElement("tbody")
		lines.forEach(line => {
			tbody.appendChild(this.createTableLine(line))
		})
		return tbody
	}

	/**
	 * This method create a line in the table.
	 * @param {object} line
	 */
	createTableLine(line) {
		let tr = document.createElement("tr")
		let tdLeft = document.createElement("td")
		tdLeft.setAttribute("class", "column1")
		tdLeft.innerHTML = line[0]
		tr.appendChild(tdLeft)
		let tdRight = document.createElement("td")
		tdRight.setAttribute("class", "column2")
		let text = line[1].join("<br>")
		tdRight.innerHTML = text
		tr.appendChild(tdRight)
		return tr
	}
}
