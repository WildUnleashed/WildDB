//Exemplo de uso #1
const { DatabaseBuilder, DatabaseReader, Table, Field, FieldType, Identifier, IdentifierType } = require("mymodule"); // Nome examplo

const mydb = new DatabaseBuilder()
    .setSecurity(false) //Mantendo isso como false, fará com que o arquivo da database não seja criptografado (não sei como fazer isso lol)
    .addTables(
        new Table()
            .setName("Table")
            .addFields(
                new Field()
                    .setName("id")
                    .setType(FieldType.Integer) // Valores disponíveis: Integer; Text; Blob; Real; Numeric
                    .addIdentifiers(
                        new Identifier()
                            .setIndentifierType(IdentifierType.NotNull), //Todos os IndentifierType: NotNull; PrimaryKey; AutoIncrement; Unic 
                    )
            )
    )
.save() //coloque o caminho aqui se não colocar salva no diretorio atual, cria a tabela caso não exista e caso exista e se houve a adição ou removação de algum field atualize ele. deve salvar com a extensão .wildb no final

mydb.insert("Table", { id: "0123456" })


// Examplo de uso #2
const { DatabaseBuilder, DatabaseReader, Table, Field, FieldType, Identifier, IdentifierType } = require("mymodule"); // Nome examplo

const db = DatabaseReader.read("./database.wildb") //coloque o caminho para a suja database, caso não tenha devera procurar por algum resultado no diretorio atual, se não encontrar apenas de um erro.
console.log(db.get("Table", "id"));