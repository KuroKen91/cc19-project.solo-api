BEGIN TRANSACTION;

CREATE TABLE final_fantasy (
    id SERIAL UNIQUE NOT NULL,
    title TEXT,
    picture TEXT,
    platform TEXT,
    releaseDate DATE
);

INSERT INTO final_fantasy (title, picture, platform, releaseDate) VALUES

('Final Fantasy 01',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff01.jpg',
       'Nintendo NES',
       'December 18, 1987'
       ),
('Final Fantasy 02',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff02.png',
       'Nintendo NES',
       'December 17, 1988'
       ),
( 'Final Fantasy 03',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff03.png',
       'Nintendo NES',
       'April 27, 1990'
       ),
( 'Final Fantasy 04',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff04.png',
       'Nintendo SNES',
       'July 19, 1991'
       ),
( 'Final Fantasy 05',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff05.png',
       'Nintendo SNES',
       'December 6, 1992'
       ),
( 'Final Fantasy 06',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff06.jpg',
       'Nintendo SNES',
       'April 2, 1994'
       ),
( 'Final Fantasy 07',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff07.jpg',
       'Sony Playstation',
       'January 31, 1997'
       ),
( 'Final Fantasy 08',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff08.jpg',
       'Sony Playstation',
       'February 11, 1999'
       ),
( 'Final Fantasy 09',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff09.png',
       'Sony Playstation',
       'July 7, 2000'
       ),
( 'Final Fantasy 10',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff10.jpg',
       'Sony Playstation 2',
       'July 19, 2001'
       ),
( 'Final Fantasy 10-2',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff10-2.jpg',
       'Sony Playstation 2',
       'March 13, 2003'
       ),
( 'Final Fantasy 12',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff12.jpg',
       'Sony Playstation 2',
       'March 16, 2006'
       ),
( 'Final Fantasy 13',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff13.jpg',
       'Sony Playstation 3',
       'December 19, 2009'
       ),
( 'Final Fantasy 13-2',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff13-2.png',
       'Sony Playstation 3',
       'December 15, 2011'
       ),
( 'Final Fantasy 15',
       'https://jackfperryjr.github.io/moogleapi-images/logos/ff15.png',
       'Sony Playstation 4',
       'November 29, 2016'
       ),
( 'Final Fantasy Brave Exvius',
       'https://mooglestorage.blob.core.windows.net/images/Game-8f24fe1b-0e23-47c3-bca1-08d712cd7324.png',
       'Mobile',
       'October 22, 2015'
       );


COMMIT;
