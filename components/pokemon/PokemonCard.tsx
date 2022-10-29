import { Card, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { SmallPokemon } from '../../interfaces';

interface Props extends Partial<SmallPokemon> {
  name: string;
  id: number;
  img: string;
}

export const PokemonCard = ({ id, img, name, url }: Props) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${name}`);
  };

  return (
    <Card isHoverable isPressable onClick={onClick}>
      <Card.Body css={{ p: 1 }}>
        <Card.Image src={img} width='100%' height={140}></Card.Image>
      </Card.Body>
      <Card.Footer>
        <Row justify='space-between'>
          <Text transform='capitalize'>{name}</Text>
          <Text>#{id}</Text>
        </Row>
      </Card.Footer>
    </Card>
  );
};
