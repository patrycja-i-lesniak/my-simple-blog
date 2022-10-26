import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import './style.css';

export default function AboutCard() {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/");
  }

  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title className='about__header'>About Us</Card.Title>
        <Card.Text className='about__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Nibh venenatis cras sed felis eget velit aliquet
          sagittis. Sit amet tellus cras adipiscing enim eu turpis. Lorem donec massa sapien
          faucibus et molestie ac feugiat. Nulla malesuada pellentesque elit eget gravida cum sociis
          natoque penatibus. Enim neque volutpat ac tincidunt. Non blandit massa enim nec dui nunc
          mattis enim. Ultrices mi tempus imperdiet nulla malesuada pellentesque. Pellentesque elit
          ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Leo a diam sollicitudin
          tempor id eu. Fermentum leo vel orci porta non. Magna eget est lorem ipsum dolor sit amet.
          Vitae proin sagittis nisl rhoncus mattis rhoncus. Varius morbi enim nunc faucibus a.
          Pharetra diam sit amet nisl suscipit adipiscing bibendum est ultricies. Scelerisque eu
          ultrices vitae auctor eu. Enim nec dui nunc mattis enim ut tellus elementum sagittis.
          Morbi leo urna molestie at elementum eu facilisis sed. Nunc sed id semper risus in
          hendrerit gravida. Vitae turpis massa sed elementum tempus egestas sed sed risus.
        </Card.Text>
        <Card.Text className='about__text'>
          Aliquet sagittis id consectetur purus ut. Sed tempus urna et pharetra pharetra massa massa
          ultricies mi. Eu volutpat odio facilisis mauris sit amet massa. Vitae suscipit tellus
          mauris a diam maecenas sed enim ut. Pharetra diam sit amet nisl suscipit adipiscing
          bibendum est ultricies. Ultricies tristique nulla aliquet enim tortor. Odio ut sem nulla
          pharetra diam sit amet. Velit aliquet sagittis id consectetur purus. Tincidunt nunc
          pulvinar sapien et ligula ullamcorper malesuada proin libero. Eget velit aliquet sagittis
          id consectetur purus ut faucibus. Egestas fringilla phasellus faucibus scelerisque
          eleifend. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Posuere morbi
          leo urna molestie. Nam aliquam sem et tortor consequat id porta nibh. A pellentesque sit
          amet porttitor eget dolor morbi non arcu.
        </Card.Text>
        <Card.Text className='about__text'>
          Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Vestibulum
          rhoncus est pellentesque elit ullamcorper. Nisi est sit amet facilisis magna etiam tempor.
          Mi ipsum faucibus vitae aliquet nec ullamcorper. Nunc lobortis mattis aliquam faucibus
          purus in massa tempor. Lacus vestibulum sed arcu non odio. Scelerisque felis imperdiet
          proin fermentum leo vel orci. Libero enim sed faucibus turpis in. Et ultrices neque ornare
          aenean euismod elementum nisi quis eleifend. Et netus et malesuada fames ac turpis. Neque
          viverra justo nec ultrices dui sapien. Turpis egestas sed tempus urna. Quam quisque id
          diam vel quam elementum pulvinar. Elementum nibh tellus molestie nunc non blandit massa.
        </Card.Text>
        <Button variant="info" onClick={handleSubmit}>
          Go to Home page
        </Button>
      </Card.Body>
    </Card>
  );
}
