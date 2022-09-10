// Skill_Tree.js
/*:
* @plugindesc Plugin adicional que controla las funcionalidades del Skill Tree Engine.
* @author: Alex
*
*/

function Skill_Tree_Spawn()
{
 i = 44; 
 while(i <= 83)
 {
  for(j = 0; j <= 9; j++)
  { 
    if($gameVariables.value(i)[j] < -28)
    {
        var ID = ($gameVariables.value(i)[j] * (-1)) - 25;
        var Name = Skill_Tree_Define_Name($gameVariables.value(i)[j] * (-1));
        var Pos_X = $gameVariables.value(84)[($gameVariables.value(i)[j] * (-1)) - 29]; //Sort Skill Vector order.
        var Pos_Y = $gameVariables.value(85)[($gameVariables.value(i)[j] * (-1)) - 29];
        $gameScreen.showPicture(ID, Name, 1, Pos_X, Pos_Y, 100, 100, 255, 0);
    }
  }
   ((i > 51) && (i < 82)) ? (i = 82) : i++;
 }
}

/*function Skill_Tree_Logo_Parallax()
{
   i = 44;
   while(i <= 83)
   {
       for(j = 0; j <= 9; j++)
       {
           if($gameVariables.value(i)[j] < -28)
           {
               picture_data = (($gameVariables.value(i)[j] * (-1)) - 25);
               $gameVariables.setValue(60,$gameScreen.picture(picture_data).x());
               $gameVariables.setValue(61,$gameScreen.picture(picture_data).y());
              // $gameMessage.add(picture_data + " " + $gameVariables.value(60) + " " + $gameVariables.value(61));
               var ID = ($gameVariables.value(i)[j] * (-1)) - 25;
               var Pos_X = Skill_Tree_Calculus_X();
               var Pos_Y = Skill_Tree_Calculus_Y();
               $gameScreen.movePicture(ID, 1, Pos_X, Pos_Y, 100, 100, 255, 0, 23);
           }
       }
       ((i > 51) && (i < 82)) ? (i = 82) : i++;
   }
}*/

function Skill_Tree_Logo_Parallax()
{
       for(j = 0; j <= 37; j++)
       {
           if($gameVariables.value(90)[j] < 0)
           {
               picture_data = (($gameVariables.value(90)[j] * (-1)) - 25);
               $gameVariables.setValue(60,$gameScreen.picture(picture_data).x());
               $gameVariables.setValue(61,$gameScreen.picture(picture_data).y());
               var ID = ($gameVariables.value(90)[j] * (-1)) - 25;
               var Pos_X = Skill_Tree_Calculus_X();
               var Pos_Y = Skill_Tree_Calculus_Y();
               $gameScreen.movePicture(ID, 1, Pos_X, Pos_Y, 100, 100, 255, 0, 23);
           }
       }
}

function Skill_Tree_Calculus_X()
{
    X = $gameVariables.value(60);
    delta_X = $gameVariables.value(58);
    switch ($gameVariables.value(37)){
        case 1:
         X += delta_X;
        break;
        case 3:
         X -= delta_X;   
        break;
        case 4:
         X += delta_X;    
        break;
        case 6:
         X -= delta_X;   
        break;
        case 7:
         X += delta_X;  
        break;
        case 9:
         X -= delta_X; 
        break;
        default:
            return X;    
    }
    return X;
}

function Skill_Tree_Calculus_Y()
{
    Y = $gameVariables.value(61);
    delta_Y = $gameVariables.value(59);
    switch ($gameVariables.value(37)){
        case 1:
         Y -= delta_Y;  
        break;
        case 2:
         Y -= delta_Y;  
        break;
        case 3:
         Y -= delta_Y;    
        break;
        case 7:
         Y += delta_Y;   
        break;
        case 8:
         Y += delta_Y;   
        break;
        case 9:
         Y += delta_Y;   
        break; 
        default:
            return Y;   
    }
    return Y;
}

function Skill_Tree_Browse(Skill_id)
{
    var verificator = false;
    switch(Skill_id)
    {
        case 29:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 30:
            verificator = Skill_Tree_Unlock(-29,1);
        break;
        case 31:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 32:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 33:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 34:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 35:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 36:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 37:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 38:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 39:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 40:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 41:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 42:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 43:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 44:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 45:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 46:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 47:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 48:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 49:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 50:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 51:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 52:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 53:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 54:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 55:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 56:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 57:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 58:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 59:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 60:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 61:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 62:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 63:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 64:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 65:
            verificator = Skill_Tree_Unlock(1,1);
        break;
        case 66:
            verificator = Skill_Tree_Unlock(1,1);
        break;
    }
    if(verificator == true) Skill_Tree_Set_ID(Skill_id * -1);
    return verificator;
}

function Skill_Tree_Unlock(d1,d2)
{
 value = 0;
 max_value = 0;
 verificator = false;
 if(d1 != 1) max_value++;
 if(d2 != 1) max_value++;
 i = 44; 
 while(i <= 83)
 {
  for(j = 0; j <= 9; j++)
  { 
    if(($gameVariables.value(i)[j] == d1) || ($gameVariables.value(i)[j] == d2))
    {
         value++;
    }
  }
   ((i > 51) && (i < 82)) ? (i = 82) : i++;
 }
 (value == max_value) ? verificator = true : verificator = false;
 return verificator;  
}

function Skill_Tree_File_Name()
{
    var Name = 'Skill_Tree_Unlocked_';
    var Car = '';
    var Vector = new Array(5);
    $gameVariables.setValue(88,Vector);
    //init vector
    for(i = 0; i <= 4; i++)
    {
        Car = String(i+1);
        $gameVariables.value(88)[i] = Name + Car;
    }
}

function Skill_Tree_Define_Name(id)
{
    id -= 29;    
    return 'Skill_Tree_Unlocked_1';
    //return $gameVariables.value(88)[id];
}

function Skill_Tree_Armor_Name()
{
    var Vector =  new Array(37);    
    $gameVariables.setValue(89, Vector);
    for(i = 0; i <= 37; i++)
    {
       $gameVariables.value(89)[i] = $dataArmors[i+5].name;  
    }
}

function Skill_Tree_Armor_Name_Browse()
{
    
    //return $gameVariables.value($gameVariables.value(52))[$gameVariables.value(53)];10
    return ($gameVariables.value(89)[((Math.abs($gameVariables.value($gameVariables.value(52))[$gameVariables.value(53)])))-29]);
}

function Skill_Tree_Use(Skill_Name)
{
   for(i = 0; i <= 5; i++)
   {
       if(Skill_Name == $dataArmors[i+5].name) j = (i+5);
   }
   $gameActors.actor(1).forceChangeEquip(1,$dataArmors[j]);
   return 0;
}

function Skill_Tree_Remove_Image()
{
    for(i = 1; i <= 41; i++)
    {
        $gameScreen.erasePicture(i);
    }
}

function Skill_Tree_ID_Generator()
{
    var Vector = new Array(37)
    for(i = 0; i <= 37; i++)
    {
        Vector[i] = 0;
    }
    $gameVariables.setValue(90,Vector);
}

function Skill_Tree_Set_ID(id)
{
   $gameVariables.value(90)[(id *(-1))-29] = id;
}

function Skill_Tree_Logo_Unlock()
{
  if($gameVariables.value($gameVariables.value(52))[$gameVariables.value(53)] < 0)
   { 
    $gameVariables.value(84)[($gameVariables.value($gameVariables.value(52))[$gameVariables.value(53)]*(-1))-29] = $gameVariables.value(86); //store Cursor Map X virtual pos.
    $gameVariables.value(85)[($gameVariables.value($gameVariables.value(52))[$gameVariables.value(53)]*(-1))-29] = $gameVariables.value(87); //store Cursor Map Y virtual pos.
        var ID = (($gameVariables.value($gameVariables.value(52))[$gameVariables.value(53)]* (-1)) - 25);
        var Name = Skill_Tree_Define_Name($gameVariables.value($gameVariables.value(52))[$gameVariables.value(53)] * (-1));
        var Pos_X = $gameVariables.value(35);
        var Pos_Y = $gameVariables.value(36);
        $gameMessage.add(ID + " " + Pos_X + " " + Pos_Y);
        $gameScreen.showPicture(ID, Name, 1, Pos_X, Pos_Y, 100, 100, 255, 0);
    }
}

function Skill_Tree_Verificator(id)
{
    var bool = (id == $gameVariables.value($gameVariables.value(52))[$gameVariables.value(53)]);
    return bool;
}

function Skill_Tree_Get_Id()
{
    return $gameVariables.value($gameVariables.value(52))[$gameVariables.value(53)]; 
}

function Skill_Tree_Sum(n)
{
    acum = 0;
    for(i = 2; i <= Math.round(n/3); i++)
    {   
        acum = acum + Math.floor(n / i);
    }
    return acum;
}

function Skill_Tree_Text_Pos(text,fontsize)
{
    var length = text.length;
    //var n = length + 9;
    var x = 408;
    //const K = Math.round(Math.log((fontsize*length)*length));
    //const K = Math.round((fontsize + (fontsize % 2) / 2) - 1)*2 + Skill_Tree_Sum(fontsize,n);
    return (x - (length * 5));
}

function Skill_Tree_First_Open()
{
    $gameActors.actor(1).learnSkill(29); //learn the core skill.
    $gameVariables.value(49)[5] *= -1;
    /*var bell = { name: Bell3, volume: 90, pitch: 100, pan: 0};
    AudioManager.playSE(bell);*/
    $gameVariables.value(84)[0] = 408;
    $gameVariables.value(85)[0] = 312;
    var ID = (29 - 25);
    var Name = Skill_Tree_Define_Name((-29) * (-1));
    var Pos_X = 408
    var Pos_Y = 312
    $gameMessage.add(ID + " " + Pos_X + " " + Pos_Y);
    $gameScreen.showPicture(ID, Name, 1, Pos_X, Pos_Y, 100, 100, 255, 0);
    Skill_Tree_Set_ID(-29);
    
}


