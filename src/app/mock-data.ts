import { Publication } from './publication';

export const PublicationsMock:Publication[]  =  [
  { Name: 'Avvenire', Type:'Newspaper', Language: 'Italian', Category:'National Newspaper', Country:'Italy',Region:'-',Expirydate:'-' },
  { Name: 'Il Gazzettino', Type:'Newspaper', Language: 'Italian', Category:'Local Newspaper', Country:'Italy',Region:'Northeast Italy',Expirydate:'-' },
  { Name: 'Il Tirreno', Type:'Newspaper', Language: 'Italian', Category:'Regional Newspaper', Country:'Italy',Region:'Tuscany',Expirydate:'-' },
  { Name: 'Al Volante', Type:'Magazine', Language: 'Italian', Category:'Automobile magazine', Country:'Italy',Region:'-',Expirydate:'-' },
  { Name: 'Blow Up', Type:'Magazine', Language: 'Italian', Category:'Music magazine', Country:'Italy',Region:'-',Expirydate:'-' }
];

export const SourcesMock = [
{Name:'D Media',Type:'Single'},
{Name:'Coronaca Qui',Type:'Multiple'},
{Name:'GEDI Gruppo Editoriaie',Type:'Multiple'},
{Name:'Avvenire Nuova Editoriaie Italiana S.p.A',Type:'Single'},
{Name:'Classeditori',Type:'Single'}
];


