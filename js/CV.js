/**
 * This function wrap the text as a HTML span tag and give it the bold class.
 * @name bold
 * @param {Object} params
 * @param {string} params.text The text to make bold.
 * @returns {string}
 */
const bold = ({ text }) => "<span class=\"bold\">" + text + "</span>"

class CV {
    /**
     * @typedef RowContent
     * @property {string[]} columnLeft The title of the row in the table.
     * @property {string[]} columnRight Lines to display in the row.
     */

    /**
     * This method create each part of the CV.
     * @name constructor
     */
    constructor() {
        let square = document.getElementById("page")

        square.appendChild(this.createPicture({
            imgSrc: "pictures/id_picture.png"
        }))

        square.appendChild(this.createHeader({
            name: "Gilles HUBERT",
            informations: [
                this.createBirthInformations({
                    birthDay: 21,
                    birthMonth: 8,
                    birthYear: 1997
                }),
                "34 rue du Docteur Charles Coubard",
                "Cholet, France 49300",
                "Résidence : Les Terrasses Du Parc De Moine",
                "(+33) 6 67 62 57 48",
                "gilles.hubert97@gmail.com"
            ]
        }))

        square.appendChild(this.createTitle({
            title: "Actuellement : Ingénieur d'études chez Alten<br>" +
                "Recherche : Poste d'ingénieur développeur dans la robotique"
        }))

        square.appendChild(this.createTable({
            tableTitle: "Expériences professionnelles",
            rowsContent: [
                {
                    columnLeft: [
                        "Ingénieur d'études"
                    ],
                    columnRight: [
                        bold({ text: "Alten" }) + " - Depuis Mars 2022",
                        "Équipe de 5 consultants. Environnement technique : Python, PyCharm, Jenkins",
                        "Réalisation de tests IV et intégration d'un logiciel de cryptographie."
                    ]
                },
                {
                    columnLeft: [
                        "Stage de fin d'études"
                    ],
                    columnRight: [
                        bold({ text: "IpsoSenso" }) + " - Mars 2020 à Août 2020",
                        "Réalisation de sites et d'applications web à l'aide de Java6, du framework Struts2 et/ou de la bibliothèque JS React."
                    ]
                },
                {
                    columnLeft: [
                        "Réalisation d'un AGV"
                    ],
                    columnRight: [
                        bold({ text: "Prog'HEI & Radiante" }) + " - de Février 2020 à Décembre 2020",
                        "Groupe de 3 personnes. Logiciel utilisé : Arduino",
                        "Programmation d'un robot AGV transporteur se déplaçant par optoguidage dans un entrepôt."
                    ]
                }
            ]
        }))

        square.appendChild(this.createTable({
            tableTitle: "Formation",
            rowsContent: [
                {
                    columnLeft: [
                        "École Supérieure"
                    ],
                    columnRight: [
                        bold({ text: "ISEN" }) + " (Lille) - 2015 à 2020",
                        "Fomation ingénieur - Domaine Professionnel : Robotique Mobile."
                    ]
                },
                {
                    columnLeft: [
                        "Diplôme d'anglais"
                    ],
                    columnRight: [
                        bold({ text: "Cambridge English: First (FCE)" }) + " - 2019 - Niveau B2 Grade C"
                    ]
                }
            ]
        }))

        square.appendChild(this.createTable({
            tableTitle: "Projets personnels",
            rowsContent: [
                {
                    columnLeft: [
                        "Projet Laboratoire"
                    ],
                    columnRight: [
                        "<a href=\"https://github.com/GillouH/Laboratory\">https://github.com/GillouH/Laboratory</a> - Depuis le 22 Juillet 2021",
                        "Développement d'une architecture Serveur en Python (Socket - TCP) avec une connection sécurisée, permettant d'y ajouter des services simplement."
                    ]
                },
                {
                    columnLeft: [
                        "Manager de mot de passes"
                    ],
                    columnRight: [
                        "Non disponible sur GitHub",
                        "Script Python permettant de (dé)crypter un fichier de mot de passe."
                    ]
                }
            ]
        }))

        square.appendChild(this.createTable({
            tableTitle: "Projets étudiants",
            rowsContent: [
                {
                    columnLeft: [
                        "Projet Heron"
                    ],
                    columnRight: [
                        bold({ text: "ISEN (Lille)" }) + " - de Septembre 2019 à Février 2020",
                        "Groupe de 10 personnes. Environnement technique : Python, ROS, Linux",
                        "Programmation d'un robot AGV transporteur se déplaçant par géoguidage dans un local de démonstration."
                    ]
                },
                {
                    columnLeft: [
                        "Projet HoloBot"
                    ],
                    columnRight: [
                        bold({ text: "ISEN (Lille)" }) + " - de Octobre 2018 à Septembre 2018",
                        "Groupe de 4 personnes. Environnement technique : Unity, Visual Studio, Linux",
                        "Création d'une interface pour HoloLens permettant de contrôler un robot Hexapode par le biais d'un serveur. Ce projet s'inscrit dans la réalisation d'un entrepôt intelligent."
                    ]
                }
            ]
        }))

        square.appendChild(this.createTable({
            tableTitle: "Savoir-être",
            rowsContent: [
                {
                    columnLeft: [
                        "Social"
                    ],
                    columnRight: [
                        "Bienveillant, transmission, confiance"
                    ]
                },
                {
                    columnLeft: [
                        "Professionnel"
                    ],
                    columnRight: [
                        "Persévérant, volontaire, curieux"
                    ]
                },
                {
                    columnLeft: [
                        "Valeurs"
                    ],
                    columnRight: [
                        "Implication, respect, reconnaissance"
                    ]
                }
            ]
        }))
    }

    /**
     * This method create the ID picture.
     * @param {Object} params
     * @param {string} params.imgSrc The path to the image.
     * @returns {HTMLElement}
     */
    createPicture({ imgSrc }) {
        let img = document.createElement("img")

        let attributes = [
            {
                attribute_name: "id",
                attribute_value: "IDPicture"
            },
            {
                attribute_name: "src",
                attribute_value: imgSrc
            },
            {
                attribute_name: "alt",
                attribute_value: "photo d'identité"
            }
        ]

        attributes.forEach(
            attribute => img.setAttribute(
                attribute.attribute_name,
                attribute.attribute_value
            )
        )

        return img
    }

    /**
     * This method create the top of the CV.
     * @name createHeader
     * @param {Object} params
     * @param {string} params.name The name to put on the top of the CV.
     * @param {string[]} params.informations Informations to put under the CV (one line by element in the array).
     * @return {HTMLElement}
     */
    createHeader({ name, informations }) {
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
     * @param {Object} params
     * @param {number} params.birthDay The day of birth.
     * @param {number} params.birthMonth The month of birth.
     * @param {number} params.birthYear The year of birth.
     * @returns {string}
    */
    createBirthInformations({ birthDay, birthMonth, birthYear }) {
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
     * @param {Object} params
     * @param {string} params.title. The title on the CV.
     * @return {HTMLElement}
     */
    createTitle({ title }) {
        let titleElement = document.createElement("h1")
        titleElement.innerHTML = title
        return titleElement
    }

    /**
     * This method create a table in the CV.
     * @name createTable
     * @param {Object} params
     * @param {string} params.tableTitle The title of the table.
     * @param {RowContent[]} params.rowsContent The content of the table.
     * @return {HTMLElement}
     */
    createTable({ tableTitle, rowsContent }) {
        let table = document.createElement("table")
        table.setAttribute("class", "categorie")

        table.appendChild(this.createTableHead({
            title: tableTitle
        }))

        table.appendChild(this.createTableBody({
            rows: rowsContent
        }))

        return table
    }

    /**
     * This method create the table head.
     * @name createTableHead
     * @param {Object} params
     * @param {string} params.title The title of the table.
     * @returns {HTMLTableSectionElement}
     */
    createTableHead({ title }) {
        let thead = document.createElement("thead")

        thead.appendChild(this.createTableRow({
            row: {
                columnLeft: [
                    "<img class=\"blue_line\" src=\"pictures/blue_line.jpg\">"
                ],
                columnRight: [
                    title
                ]
            }
        }))

        return thead
    }

    /**
     * This method create the table body.
     * @name createTableBody
     * @param {Object} params
     * @param {RowContent[]} params.rows
     */
    createTableBody({ rows }) {
        let tbody = document.createElement("tbody")

        rows.forEach(
            row => {
                tbody.appendChild(this.createTableRow({
                    row: row
                }))
            }
        )

        return tbody
    }

    /**
     * This method create a line in the table.
     * @param {Object} params
     * @param {RowContent} params.row Content of the row. One line for each element in arrays.
     */
    createTableRow({ row }) {
        let tr = document.createElement("tr")

        let columns = [
            {
                class: "column1",
                lines: row.columnLeft
            },
            {
                class: "column2",
                lines: row.columnRight
            }
        ]

        columns.forEach(
            column => {
                let td = document.createElement("td")

                td.setAttribute(
                    "class",
                    column.class
                )

                td.innerHTML = column.lines.join("<br>")
                tr.appendChild(td)
            }
        )

        return tr
    }
}
