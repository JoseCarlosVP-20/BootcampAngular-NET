// See https://aka.ms/new-console-template for more information
using bases;

Console.WriteLine("Hello, World!");

double altura = 1.80;
System.Console.WriteLine($"la variable {nameof(altura)} tiene el valor de {altura}");

uint numeroNatural = 23;
int numeroEntero = 23;
float numeroReal = 2.3f;
double numeroRealDoble = 2.333333;
decimal numeroDecimal = 0.1M;
bool feliz = true;
var peso = 1.88;

int? valor = null;

System.Console.WriteLine($"Tipo de dato {nameof(peso)} es {peso.GetType()}");

string[] nombres = new string[4];
nombres[0] = "Jose 1";
nombres[1] = "Jose 2";
nombres[2] = "Jose 3";
nombres[3] = "Jose 4";

string[] apellidos = new string[] { "Piedra", "Gomez" };

for (int i = 0; i < nombres.Length; i++)
{
    System.Console.WriteLine(nombres[i]);
}

var personas = new Persona();

personas.Id=1;
personas.Nombres="Jose Carlos";
personas.Apellidos="Villalba";
System.Console.WriteLine($"Persona {personas.Nombres} {personas.Apellidos}");