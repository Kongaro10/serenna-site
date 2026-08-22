/* ===================================================
   CATÁLOGO SERENNA
=================================================== */

const produtos = [

    // ===========================
    // CADERNOS
    // ===========================

    {
        id: 1,

        categoria: "cadernos",

        colecao: "Janelas",

        nome: "Janela da Primavera",

        descricao:
            "Caderno personalizado produzido artesanalmente.",

        precoBase: 59.90,

        imagens: [
            "assets/img/produtos/caderno-primavera-1.jpg",
            "assets/img/produtos/caderno-primavera-2.jpg",
            "assets/img/produtos/caderno-primavera-3.jpg"
        ],

        opcoes: {

            tamanho: [

                {nome:"A5",valor:0},
                {nome:"Universitário",valor:20}

            ],

            wireo: [

                {nome:"Branco",valor:0},
                {nome:"Preto",valor:5},
                {nome:"Dourado",valor:8}

            ],

            folhas: [

                {nome:"96 folhas",valor:0},
                {nome:"120 folhas",valor:10},
                {nome:"160 folhas",valor:18}

            ]

        }

    },



    // ===========================
    // PLANNERS
    // ===========================

    {

        id:2,

        categoria:"planners",

        colecao:"Essencial",

        nome:"Planner Permanente",

        descricao:
            "Planner permanente para organização da rotina.",

        precoBase:79.90,

        imagens:[

            "assets/img/produtos/planner-1.jpg"

        ],

        opcoes:{

            tamanho:[

                {nome:"A5",valor:0}

            ],

            wireo:[

                {nome:"Branco",valor:0},
                {nome:"Dourado",valor:8}

            ]

        }

    },



    // ===========================
    // AGENDAS
    // ===========================

    {

        id:3,

        categoria:"agendas",

        colecao:"Essencial",

        nome:"Agenda Permanente",

        descricao:
            "Agenda personalizada para uso diário.",

        precoBase:89.90,

        imagens:[

            "assets/img/produtos/agenda-1.jpg"

        ],

        opcoes:{

            tamanho:[

                {nome:"A5",valor:0}

            ],

            wireo:[

                {nome:"Branco",valor:0},
                {nome:"Rose Gold",valor:10}

            ]

        }

    }

];



/* ===================================================
BUSCAS
=================================================== */

function buscarProduto(id){

    return produtos.find(produto => produto.id == id);

}



function buscarCategoria(categoria){

    return produtos.filter(produto => produto.categoria === categoria);

}