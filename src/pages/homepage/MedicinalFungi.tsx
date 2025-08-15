import Li from '../../components/ui/Li';
import H2 from '../../components/ui/typography/H2';
import P from '../../components/ui/typography/P';
import Ul from '../../components/ui/Ul';
import UnsplashImage from '../../components/ui/UnsplashImage';
import fungiList from '../../data/fungi';
import { getFungiByCategory } from '../../utils/fungiFilters';

const MedicinalFungi = () => {
  const medicinalFungi = getFungiByCategory('medicinal fungi');
  console.log(fungiList);
  console.log(medicinalFungi);
  return (
    <div className="min-h-dynamic-height flex items-center justify-center px-4">
      <div className="flex flex-col gap-y-4 py-14">
        <H2>Medicinal Fungi</H2>
        {/* <H1 className="text-xl font-bold">Medicinal Fungi</H1> */}
        <P className="sm:text-lg">
          The clinical value of fungi on humans recover and preservation
        </P>
        <div className="grid gap-y-8 md:grid-cols-2 md:gap-x-10 lg:grid-cols-3 lg:gap-x-20">
          {fungiList.map((fungus, index) => (
            <div className="flex flex-col gap-y-4" key={index}>
              <div className="relative">
                <UnsplashImage
                  photoId={fungus.photoId}
                  className="h-60 w-full rounded-2xl filter"
                />
                {/* <div className="bg-primary/60 absolute inset-0 mix-blend-multiply"></div> */}
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="flex items-center gap-x-1">
                  <P className="font-bold">{fungus.name}</P>
                  <P>
                    <em>({fungus.scientificName})</em>
                  </P>
                </div>
                <P>{fungus.benefits}</P>itemitem
                <div className="flex gap-x-1">
                  <P>Compounds:</P>
                  <Ul>
                    {fungus.effects?.map((item, index) => (
                      <Li key={index}>{item}, </Li>
                    ))}
                  </Ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MedicinalFungi;
