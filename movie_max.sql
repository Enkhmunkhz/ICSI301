/*create table movie(mid int, imagee varchar(30), eps_num int, yearr int, typee int, filtera varchar(20), fav varchar(5), about varchar(50));
*/
create table category(cID int, cName varchar(12));
create table movie_name(ID int, mID int);
create table movie_list(mID int, img varchar(25), filterr varchar(5),eps_num int, name varchar(30), yearr int, fav varchar(6), about varchar(50));
select * from category;
insert into category values(1, 'family');
insert into category values(2, 'comedy');
insert into category values(3, 'children');
insert into category values(4, 'TV shows');
insert into category values(5, 'teenage');
insert into category values(6, 'romantic');
insert into category values(7, 'fantasy');
insert into category values(8, 'dramas');



select * from movie_name;
delete from movie_name
insert into movie_name values(1, 3);
insert into movie_name values(1, 5);
insert into movie_name values(1, 11);
insert into movie_name values(1, 15);
insert into movie_name values(1, 21);
insert into movie_name values(1, 36);

insert into movie_name values(2, 4);
insert into movie_name values(2, 5);
insert into movie_name values(2, 6);
insert into movie_name values(2, 21);
insert into movie_name values(2, 22);
insert into movie_name values(2, 26);

insert into movie_name values(3, 36);

insert into movie_name values(4, 16);

insert into movie_name values(5, 7);
insert into movie_name values(5, 8);
insert into movie_name values(5, 9);
insert into movie_name values(5, 10);
insert into movie_name values(5, 14);
insert into movie_name values(5, 16);
insert into movie_name values(5, 17);
insert into movie_name values(5, 18);
insert into movie_name values(5, 19);
insert into movie_name values(5, 20);
insert into movie_name values(5, 27);
insert into movie_name values(5, 28);
insert into movie_name values(5, 29);
insert into movie_name values(5, 30);

insert into movie_name values(6, 6);
insert into movie_name values(6, 7);
insert into movie_name values(6, 8);
insert into movie_name values(6, 9);
insert into movie_name values(6, 10);
insert into movie_name values(6, 14);
insert into movie_name values(6, 16);
insert into movie_name values(6, 17);
insert into movie_name values(6, 18);
insert into movie_name values(6, 19);
insert into movie_name values(6, 20);
insert into movie_name values(6, 22);
insert into movie_name values(6, 23);
insert into movie_name values(6, 27);
insert into movie_name values(6, 28);
insert into movie_name values(6, 29);
insert into movie_name values(6, 30);
insert into movie_name values(6, 31);

insert into movie_name values(7, 7);
insert into movie_name values(7, 8);
insert into movie_name values(7, 9);
insert into movie_name values(7, 10);
insert into movie_name values(7, 12);
insert into movie_name values(7, 14);
insert into movie_name values(7, 16);
insert into movie_name values(7, 17);
insert into movie_name values(7, 18);
insert into movie_name values(7, 19);
insert into movie_name values(7, 20);
insert into movie_name values(7, 27);
insert into movie_name values(7, 28);
insert into movie_name values(7, 29);
insert into movie_name values(7, 30);

insert into movie_name values(8, 1);
insert into movie_name values(8, 2);
insert into movie_name values(8, 3);
insert into movie_name values(8, 4);
insert into movie_name values(8, 11);
insert into movie_name values(8, 13);
insert into movie_name values(8, 15);
insert into movie_name values(8, 21);
insert into movie_name values(8, 32);
insert into movie_name values(8, 34);
insert into movie_name values(8, 35);


select * from movie_list as m order by mID asc;
insert into movie_list values(1, '../images/movie1.webp', 'olon',16, 'gal comandiin hajuu ', 2022, 'false', 'so ji son ni tsagdaa buguud ingeed m');
insert into movie_list values(2, '../images/movie2.webp', 'olon',16, 'sul doroi baatar', 2010, 'false', 'yu ryon bol ingeed tegeed bla bla lroremmm');
insert into movie_list values(3, '../images/movie3.webp', 'olon',16, 'hen negen', 2020, 'false', 'Lorem Ipsum is simply dummy ');
insert into movie_list values(4, '../images/movie4.webp', 'olon',16, 'shuten bishregchiin zahidal', 2020, 'false', 'Lorem Ipsum is simply dummy text of the ');
insert into movie_list values(5, '../images/movie5.webp', 'olon',16, 'sunsiig bari', 2019, 'false', 'Lorem Ipsum is simply dummy text of the ');
insert into movie_list values(6, '../images/movie6.webp', 'olon',16, 'dutagdaltai humuus', 2015, 'false', 'Lorem Ipsum is simply dummy text ');
insert into movie_list values(7, '../images/movie7.webp', 'olon',16, 'hair durlal ch geh shig', 2022, 'false', 'Lorem Ipsum is simply dummy ');
insert into movie_list values(8, '../images/movie8.webp', 'olon',16, 'jin prokuroriin ylalt', 2021, 'false', 'Lorem Ipsum is simply dummy ');
insert into movie_list values(9, '../images/movie9.webp', 'olon',16, 'noyorhol huuliin guren', 2019, 'false', 'Lorem Ipsum is simply dummy ');
insert into movie_list values(10, '../images/movie10.webp', 'olon',16, 'cheer up', 2015, 'false', 'Lorem Ipsum is simply dummy text of the ');
insert into movie_list values(11, '../images/movie11.webp', 'olon',16, 'wednesday', 2010, 'false', 'Lorem Ipsum is simply dummy text of the');
insert into movie_list values(12, '../images/movie12.webp', 'olon',16, 'holboo', 2011, 'false', 'Lorem Ipsum is simply dummy text of the ');
insert into movie_list values(13, '../images/movie13.webp', 'olon',16, 'yu ch hiimergui baina', 2010, 'false', 'Lorem Ipsum is simply dummy text of ');
insert into movie_list values(14, '../images/movie14.webp', 'olon',16, 'muu yor', 2011, 'false', 'Lorem Ipsum is simply dummy text of the printing ');
insert into movie_list values(15, '../images/movie15.webp', 'olon',16, 'yonder', 2022, 'false', 'Lorem Ipsum is simply dummy text of the printing ');
insert into movie_list values(16, '../images/movie16.webp', 'olon',16, 'pink lie', 2021, 'false', 'Lorem Ipsum is simply dummy text of the printing');




insert into movie_list values(17, '../images/movie17.webp', 'neg',16, 'noyrhol huuliin guren', 2022, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(18, '../images/movie18.webp', 'neg',16, '1000 vonii umguulugch', 2020, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(19, '../images/movie19.webp', 'neg',16, 'altan halbaga', 2012, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(20, '../images/movie20.webp', 'neg',16, 'umguulluu ehley', 2012, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(21, '../images/movie21.webp', 'neg',16, 'gaus electronics', 2013, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(22, '../images/movie22.webp', 'neg',16, 'dutagdaltai humuus', 2015, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(23, '../images/movie23.webp', 'neg',16, 'sunsiig bari', 2015, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(24, '../images/movie24.webp', 'neg',16, 'murdugch rug', 2015, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(25, '../images/movie25.webp', 'neg',16, 'surinam', 2014, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(26, '../images/movie26.webp', 'neg',16, 'romantic dna', 2015, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(27, '../images/movie27.webp', 'neg',16, 'huuliin kafe', 2017, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(28, '../images/movie28.webp', 'neg',16, 'suuliin zevseg alice', 2017, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(29, '../images/movie29.webp', 'neg',16, 'unuudriin webtoon', 2017, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(30, '../images/movie30.webp', 'neg',16, 'utga zuin aldaa', 2019, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(31, '../images/movie31.webp', 'neg',16, 'gal command hajuu', 2019, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(32, '../images/movie32.webp', 'neg',16, 'pink lie', 2021, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(33, '../images/movie33.webp', 'neg',16, 'hoyer husel', 2018, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(34, '../images/movie34.webp', 'neg',16, 'busdiin ushuu avalt', 2016, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(35, '../images/movie35.webp', 'neg',16, 'pink lie', 2020, 'false', 'Lorem Ipsum is simply dummy text of the printing');
insert into movie_list values(36, '../images/movie36.webp', 'neg',16, 'bigfoot family', 2020, 'false', 'Lorem Ipsum is simply dummy text of the printing');

use movie_max
select * from movie_list order by movie_list.mID asc;
select * from movie_name;
select * from category;


select distinct movie_list.* from category, movie_list , movie_name where category.cID = movie_name.ID and movie_name.mID = movie_list.mID 

select distinct movie_list.*, category.cName from category, movie_list, movie_name where category.cID = movie_name.ID and movie_name.mID = movie_list.mID and category.cName = 'family'


select * from movie_list
select * from movie_name
select * from category
