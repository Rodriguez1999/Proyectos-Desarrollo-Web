var usuariosData = [
    {
        idUsuario: 1,
        nombre: 'Goku',
        imagen: 'goku.jpg'
    },
    {
        idUsuario: 2,
        nombre: 'Androide 18',
        imagen: 'androide_18.jpg'
    },
    {
        idUsuario: 3,
        nombre: 'Androide 16',
        imagen: 'androide_16.jpg'
    },
    {
        idUsuario: 4,
        nombre: 'Androide 19',
        imagen: 'androide_19.jpg'
    }
]

var artistasData = [
    {
        idArtista: 1,
        nombre: 'Coldplay',
        imagen: 'artist.jpg',
        albumes: [
            {
                idAlbum: 1,
                nombreAlbum: 'Musica of the spheres',
                caratula: 'cover10.jpg',
                canciones: [
                    {
                        nombre: 'Caratul',
                        duracion: '10:00'
                    },
                    {
                        nombre: 'Sicatrices',
                        duracion: '4:00'
                    },
                    {
                        nombre: 'Tu avandono',
                        duracion: '6:00'
                    }
                ]
            },
            {
                idAlbum: 2,
                nombreAlbum: 'Electronic live',
                caratula: 'cover5.jpg',
                canciones: [
                    {
                        nombre: 'Caratul',
                        duracion: '10:00'
                    }
                ]
            },
            {
                idAlbum: 3,
                nombreAlbum: "Los heroes del silencio",
                caratula: 'cover8.jpg',
                canciones: [
                    {
                        nombre: 'Caratul',
                        duracion: '10:00'
                    }
                ]
            }
        ]
    },
    {
        idArtista: 2,
        nombre: 'Banda MS',
        imagen: 'cover1.jpg',
        albumes: [
            {
                idAlbum: 1,
                nombreAlbum: 'Musica of the spheres',
                caratula: 'cover3.jpg',
                canciones: [
                    {
                        nombre: 'Caratul',
                        duracion: '10:00'
                    }
                ]
            }
        ]
    },
    {
        idArtista: 3,
        nombre: 'Karol G',
        imagen: 'cover2.jpg',
        albumes: [
            {
                idAlbum: 1,
                nombreAlbum: 'Musica of the spheres',
                caratula: 'cover6.jpg',
                canciones: [
                    {
                        nombre: 'Caratul',
                        duracion: '10:00'
                    }
                ]
            }
        ]
    }
]

var playlistsData = [
    {
        idUsuario: 1,
        playlist: [
            {
                titulo: 'Canciones favoritas',
                caratula: 'cover5.jpg',
                canciones: [
                    {
                    nombre: 'caratula',
                    artista: 'Coldplay',
                    album: 'Music of the spheres',
                    duracion: '10:00'
                    }
                ]
            },
            {
                titulo: 'Navideña',
                caratula: 'cover7.jpg',
                canciones: [
                    {
                    nombre: 'Navidad sin ti',
                    artista: 'Marco Antonio Solis',
                    album: 'Navideña para todos',
                    duracion: '4:00'
                    }
                ]
            },
            {
                titulo: 'Musica cristiana',
                caratula: 'cover8.jpg',
                canciones: [
                    {
                    nombre: 'En tu presencia',
                    artista: 'Tercer cielo',
                    album: 'Alabanzas de adoracion',
                    duracion: '5:00'
                    }
                ]
            }
        ]
    },
    {
        idUsuario: 2,
        playlist: [
            {
                titulo: 'Canciones favoritas',
                caratula: 'cover5.jpg',
                canciones: [
                    {
                    nombre: 'caratula',
                    artista: 'Coldplay',
                    album: 'Music of the spheres',
                    duracion: '10:00'
                    }
                ]
            }
        ]
    }
]

var categorias = {
    nombreCategoria:"",
    urlImagen:"../img/Logo (1).png",
    empresas =[]
};

