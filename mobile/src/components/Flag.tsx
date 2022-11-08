import { Image, IImageProps } from 'native-base';

export function Flag({...rest}: IImageProps) {
    return (
        <Image 
            {...rest}
            alt="Bandeira"
            w={8}
            h={8}
            mx={3}
        />
    );
}