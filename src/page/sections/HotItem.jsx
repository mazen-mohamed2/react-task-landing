import Button from "../../components/ui/Button";
import Container from "../../components/ui/Container";
import CustomeCarousel from "../../components/CustomeCarousel";


const HotItem = () => {
  

  return (
    <Container className=" bg-[#36B37E] bg-opacity-[.1] h-72  ">
      <section className=" flex py-10 items-center md:justify-between justify-center">
        <h1 className="font-[600] text-3xl text-center md:text-start text-blue-h">🔥 Hot Item</h1>
        <Button className={'hidden md:block'}>See All Products</Button>
        
      </section>
      
      <CustomeCarousel/>
      <div className="flex py-16 items-center  justify-center">

      <Button className={'block md:hidden w-full'}>See All Products</Button>
      </div>
    </Container>
  );
};

export default HotItem;