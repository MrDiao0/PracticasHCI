<?php
	$entero = 10;
	$float = 12.34;
	$string = "1234 Clase HCI";
	$array = array("Key1" => "hola","key2"=>"mundo");
	$array2 = array("element1","element2","element3");
	$verdadero = true;
	$falso = false;

	class StrValTest{
		private $miVar = "clase1";
		public $miVar2 = "clase2";
		public function __toString(){
			return __CLASS__;
		}

		public function example(){
			return "equis de";
		}
	}

	echo "entero ".intval($entero)."<br/>";
	echo "float ".intval($float)."<br/>";
	echo "string ".intval($string)."<br/>";
	echo "boolean verdadero ".intval($verdadero)."<br/>";
	echo "boolean falso ".intval($falso)."<br/>";
	echo "hex-dec ".intval(0x165)."<br/>";

	echo "float string ".strval($float)."<br/>";
	$floatString = strval($float);
	echo "type float ".gettype($floatString)."<br/>";
	echo "falso string ".strval($falso)."<br/>";
	echo "boolean verdadero ".strval($verdadero)."<br/>";	

	echo "int arreglo ".(int)$array."<br/>";
	echo "int arreglo2 ".(int)$array2."<br/>";

	var_dump((array)new StrValTest);
	echo "<br>";
	var_dump((object)$string);
?>