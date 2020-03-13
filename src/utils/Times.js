import { Jogador } from './Jogador';
import { TimeFutebol } from './TimeFutebol';

export class Times {
  static FLAMENGO = new TimeFutebol('Flamengo', 'Jorge Jesus', [
    new Jogador('1', 'Diego Alves', 'Goleiro'), 
    new Jogador('2', 'Rafinha', 'Zagueiro'),
    new Jogador('3', 'Rodrigo Caio', 'Lateral'),
    new Jogador('4', 'Léo Pereira', 'Zagueiro'),
    new Jogador('5', 'Thiago Maia', 'Volante'),
    new Jogador('6', 'Felipe Luís', 'Lateral'),
    new Jogador('7', 'Everton Ribeiro', 'Meia'),
    new Jogador('8', 'Gerson', 'Meia'),
    new Jogador('9', 'Gabriel', 'Atacante'),
    new Jogador('10', 'Arrascaeta', 'Atacante'),
    new Jogador('11', 'Bruno Henrique', 'Atacante'),
  ]);
  static BARCELONA = new TimeFutebol('Barcelona', 'Tecnico', [
    new Jogador('1', 'Goleiro', 'Goleiro'), 
    new Jogador('2', 'Lateral D', 'Zagueiro'),
    new Jogador('3', 'Zagueiro Central', 'Lateral'),
    new Jogador('4', 'Quarto Zagueiro', 'Zagueiro'),
    new Jogador('5', 'Volante', 'Volante'),
    new Jogador('6', 'Lateral E', 'Lateral'),
    new Jogador('7', 'Meia', 'Meia'),
    new Jogador('8', 'Meia', 'Meia'),
    new Jogador('9', 'Centroavante', 'Atacante'),
    new Jogador('10', 'Atacante', 'Atacante'),
    new Jogador('11', 'Atacante', 'Atacante'),
  ]);
}