//https://acervolima.com/encadeamento-de-metodos-em-java-com-exemplos/

import java.util.*;

public class Main {
    public static void main(String[] args) throws Exception {
       
        new A().setint(10).setfloat(20).display();
       
    }
}

class A {
  
    private int a;
    private float b;
  
    A()
    {
        System.out.println("Calling The Constructor");
    }
  
    public A setint(int a)
    {
        this.a = a;
        return this;
    }
  
    public A setfloat(float b)
    {
        this.b = b;
        return this;
    }
  
    void display()
    {
        System.out.println("Display="
                           + a + " " + b);
    }
}
 

/*-------------------------------------------------------------------------------------------------------*/

import java.util.*;


public class Main {
    public static void main(String[] args) throws Exception {
       
       Encadeamento chamada=new Encadeamento( (float) 0.02 );
       chamada.duplicacaoDeValor().somaDeValor().mostrarValor();
       
    }
}


interface Print{
  
    void  mostrarValor();
    
}


class Encadeamento implements Print{
    
    private float valor;
    
    public Encadeamento(){}
    
    public Encadeamento(float valor){
        
        this.valor=valor;
        
    }
    
    public void setValor(float valor){
        
        this.valor=valor;
        
    }
    
    public float getValor(){
        
        return valor;
        
    }
    
    
    public  Encadeamento duplicacaoDeValor(){
        
        this.valor*=2;
        return this;
        
    }
    
    public Encadeamento somaDeValor(){
        
        this.valor+=2;
        return this;
        
    }
    
    @Override
    public void mostrarValor(){
        
        System.out.println(this.valor);
        
    }
    
}













  











  
