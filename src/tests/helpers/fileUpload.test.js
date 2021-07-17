import cloudinary from 'cloudinary';
import { fileUpload } from '../../helpers/fileUpload';

cloudinary.config({ 
    cloud_name: 'dxmmzzqo2', 
    api_key: '185737755458526', 
    api_secret: 'fEzQPedG8cY4UzwUdIvskojkjyg',
    secure: true
  });

describe('Tests in fileUpload helper', () => {
    
    // test('should load a file and return the URL', async ( done ) => {
        
    //     const res = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png');
    //     const blob = await res.blob();

    //     const file = new File([blob], 'foto.png')
    //     const url = await fileUpload( file );

    //     expect( typeof url ).toBe('string');

    //     // Borrar imagen por ID
    //     const segments = url.split('/');
    //     const imgID = segments[ segments.length - 1 ].replace('.png', '');

    //     cloudinary.v2.api.delete_resources(imgID, {}, () => {
    //         done();
    //     });


    // });

    test('should return an error', async () => {
        
        const file = new File([], 'foto.png')
        const url = await fileUpload( file );

        expect( url ).toBe( null );


    });
    
    

});
