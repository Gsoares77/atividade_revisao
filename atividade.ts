 class Funcionario {
    public nome: string;
    public data_nascimento: Date;
    public telefone: string;
    protected cpf: string;
    protected endereco: string
    protected email: string;
    protected genero: string;
    
    constructor(nome: string, data_nascimento: Date, telefone: string, cpf: string, endereco: string, email:string, genero: string){
        this. nome =  nome;
        this. data_nascimento = data_nascimento;
        this. telefone = telefone;
        this. cpf = cpf;
        this. genero = genero;
        this.email = email
        this.endereco = endereco;
    }
    mostrardados() {
        console.log('--------------Dados Do Funcionario-------------');
        console.log(`nome-- ${this.nome}`)
        console.log(`data_nascimento---- ${this.data_nascimento}`);
        console.log(`telefone--- -----${this.telefone}`);
        console.log(`cpf------- ${this.cpf}`);
        console.log(`endereco------- ${this.endereco}`);
        console.log(`email------- ${this.email}`);
        console.log(`genero------- ${this.genero}`);

        
    
    }   
    
     
}


class projetos {
    protected nome: string;
    private data_inicio: Date;
    private data_fim: Date;
    protected descricao: string;
    protected status: string;

    
    constructor(nome: string, data_inicio: Date, data_fim: Date, descricao: string, status: string){ 
        this. nome =  nome;
        this. data_inicio = data_inicio;
        this. data_fim = data_fim;
        this. descricao = descricao;
        this. status = status;
    }
  
    mostrardados() {
        console.log('-----------dados do projeto----------')
        console.log(`nome------ ${this.nome}`)
        console.log(`data_inicio----- ${this.data_inicio}`)
        console.log(`data_fim---- ${this.data_fim}`)
        console.log(`descricao----- ${this.descricao}`)
        console.log(`status---- ${this.status}`)
      

    }
}
class Tarefas {
    public nome: string;
    public descricao: string;
    private prazo: Date;
    public responsavel: string;
    private status: string
    
    constructor(nome: string, descricao: string, prazo: Date, responsavel: string, status: string){
        this.descricao = descricao;
        this.status = status;
        this.nome = nome;
        this.responsavel = responsavel;
        this.prazo = prazo;
    }

    mostrardados() {
        console.log('----------mostrar dados de tarefas-------------')
        console.log(`nome ${this.nome}`)
        console.log(`descricao ${this.descricao}`)
        console.log(`prazo ${this.prazo}`)
        console.log(`responsavel ${this.responsavel}`)
        console.log(`status ${this.status}`)

    }
}

class Equipe {
    varios_projetos: string;
    membros: string;
    lider: string;
    constructor(varios_projetos: string,membros: string, lider: string){
        this.membros = membros;
        this.varios_projetos = varios_projetos;
        this.lider = lider;

    }
    mostrardados() {
        console.log('--------mostrar dados da equipe-------------')
        console.log(`varios_projetos: ${this.varios_projetos}`)
        console.log(`membros ${this.membros}`)
        console.log(`leder ${this.lider}`)
}      

}





 class lider extends Funcionario {
   public nome: string;
   protected email: string;
   protected cpf: string;
   public funcao: string;
   constructor(nome: string, email: string, cpf: string, funcao: string, date_nascimento: Date, telefone: string, endereco: string, genero: string){
    super(nome,date_nascimento,telefone,cpf,endereco,email,genero)
    
    this.cpf = cpf;
    this.email = email;
    this.nome = nome;
    this.funcao = funcao;

   }
    mostrardados(){
        console.log('--------mostra dados do lider-----------')
        console.log(`nome ${this.nome}`)
        console.log(`email ${this.email}`)
        console.log(`cpf ${this.cpf}`)
        console.log(`funcao ${this.funcao}`)
    
    }

    
 } 
const Funcionario1 =  new Funcionario('joao'
, new Date('1990-09-09'),
 '98765432',
 '12345678912',
 'rua tal',
 'joão@gmail.com',
 'masculino')
 Funcionario1.mostrardados()


 const projetos1 = new projetos(
    'Sistema de controle',
    new Date('2024-03-13'),
    new Date('2025-08-09'),
    'gestão  de projetos',
    'andamento',
       
 );
 projetos1.mostrardados();

 const Tarefas1 = new Tarefas(
'gerenciar as tarefas dentro dos projetos','descrição',
 new Date('2025-03-13'),
'membros',
'andamento'
);
Tarefas1.mostrardados()

const Equipe1 = new Equipe(
   'projeto1,projeto2 e projeto3',
   'desenvolvedores',
   'gerente',
    
);
Equipe1.mostrardados()

const lider1 = new lider(
    'luan',
    'luan@email.com',
    '123456789045',
    'gerente',
    new Date('1988-07-05'),
    '988727678',
    'rua la',
    'masculino'
)
lider1.mostrardados()











    
 
 