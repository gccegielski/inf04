const kursy = [
    { nazwa: "React", godziny: 30, aktywny: true },
    { nazwa: "Node.js", godziny: 20, aktywny: false },
    { nazwa: "MySQL", godziny: 15, aktywny: true },
    { nazwa: "Bootstrap", godziny: 10, aktywny: true }
];

const nazwyAktywnych = (tablica) =>
    tablica
        .filter(kurs => kurs.aktywny)
        .map(kurs.nazwa);

const sumaGodzin = (tablica) =>
    tablica.reduce((suma, kurs) => suma + kurs.godziny, 0);

const opis = (kurs) =>
    `Kurs ${kurs.nazwa} trwa ${kurs.godziny} godzin`;

const dodajGodziny = (kurs, ile) => ({
    ...kurs,
    godziny: kurs.godziny + ile
});



console.log(kursy[0]);

const nowyKurs = dodajGodziny(kursy[0], 5);

console.log(nowyKurs);
console.log(kursy[0]);
