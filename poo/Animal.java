package poo;

public abstract class Animal {
	
	private double tamanho;
	private String especie;
	private Boolean bipede;
	private Boolean docil;
	protected static int idade;
	private String nome;
	private String name;
	
	public Animal() {	
	}
	
	public Animal(String nome) {
		this.bipede = false;
		this.docil = true;
		this.nome = nome;
		this.especie = "";
	}
	
	public Animal(int idade) {
		this.bipede = false;
		this.docil = true;
		this.nome = "";
		this.especie = "";
	}
	
	public Animal(int idade, String nome, String especie) {
		this.bipede = false;
		this.docil = true;
		this.nome = nome;
		this.especie = especie;
	}
	
	public String getEspecie(String name, String especie) {
		return getEspecie("","");
	}
    public void setEspecie(String name ,String especie) {
		this.especie = especie;
		this.name = name;
	}

}


