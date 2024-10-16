import { Container } from "@/components/shared/container";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";
import { Filters } from "@/components/shared/Filters";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className={"mt-10"}>
        <Title text={"Все пиццы"} size={"lg"} className={"font-extrabold"} />
      </Container>
      <TopBar />

      <Container className={"mt-10 pb-14"}>
        <div className={"flex gap-[60px]"}>
          <div className={"w-[250px]"}>
            <Filters />
          </div>

          <div className={"flex-1"}>
            <div className={"flex flex-col gap-16"}>
              <ProductsGroupList
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Бефстроганов",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Бефстроганов",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Бефстроганов",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Бефстроганов",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Бефстроганов",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Бефстроганов",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                ]}
                title={"Пиццы"}
              />

              <ProductsGroupList
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Бефстроганов",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Бефстроганов",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Бефстроганов",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Бефстроганов",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Бефстроганов",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Бефстроганов",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif",
                    price: 500,
                    items: [{ price: 550 }],
                  },
                ]}
                title={"Комбо"}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
