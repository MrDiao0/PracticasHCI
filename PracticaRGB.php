<?php
	function RGB($R,$G,$B){
		$string = "";
		if($R > 255){$R = 255;}
		if($G > 255){$G = 255;}
		if($B > 255){$B = 255;}
		function Dec2Hex($R){
			$aux = 0;
			$auxString = "";

			if($R == 0){ return "00";}
			while($R > 0){
				$aux = $R%16;
				if($aux == 10){$aux = 'A';}
				if($aux == 11){$aux = 'B';}
				if($aux == 12){$aux = 'C';}
				if($aux == 13){$aux = 'D';}
				if($aux == 14){$aux = 'E';}
				if($aux == 15){$aux = 'F';}
				if($R < 10){$aux = "0".$aux;}
				$auxString = strval($aux).$auxString;
				$R = floor($R / 16);
			}
			return $auxString;
		}

		$string = Dec2Hex($R).Dec2Hex($G).Dec2Hex($B);
		return $string;
	}
	echo RGB(250,250,250);
?>