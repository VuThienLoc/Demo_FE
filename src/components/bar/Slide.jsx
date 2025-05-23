import { Carousel } from "antd";

function carousel() {
  return (
    <div className="mt-6">
      <Carousel arrows infinite={true} autoplay>
        <div>
          <div className="min-h-[60vh] flex flex-col justify-center bg-[url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center">
            <h1 className="text-left text-3xl font-bold text-white pl-8">
              Gender Health Awareness
            </h1>
            <h3 className="text-left text-lg font-semibold text-white pl-8">
              Promoting equality and access to healthcare for all genders.
            </h3>
          </div>
        </div>
        <div>
          <div className="min-h-[60vh] flex flex-col justify-center bg-[url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center">
            <h1 className="text-left text-3xl font-bold text-white pl-8">
              Inclusive Education
            </h1>
            <h3 className="text-left text-lg font-semibold text-white pl-8">
              Empowering individuals with knowledge about gender health.
            </h3>
          </div>
        </div>
        <div>
          <div className="min-h-[60vh] flex flex-col justify-center bg-[url('https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center">
            <h1 className="text-left text-3xl font-bold text-white pl-8">
              Breaking Stereotypes
            </h1>
            <h3 className="text-left text-lg font-semibold text-white pl-8">
              Encouraging open conversations about gender and health.
            </h3>
          </div>
        </div>
        <div>
          <div className="min-h-[60vh] flex flex-col justify-center bg-[url('https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-center">
            <h1 className="text-left text-3xl font-bold text-white pl-8">
              Building a Better Future
            </h1>
            <h3 className="text-left text-lg font-semibold text-white pl-8">
              Advocating for equal opportunities and healthcare for all.
            </h3>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default carousel;
