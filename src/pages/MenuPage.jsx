import * as styles from "./MenuPage.styles";
import MenuOverview from "../components/MenuOverview/MenuOverview";
import AddItemForm from "../components/AddItemForm/AddItemForm";
import { useState } from "react";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

const MenuPage = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: "cheeseburger",
      imageUrl:
        "https://saltpepperskillet.com/wp-content/uploads/flat-top-cheeseburger-horizontal-close-up.jpg",
      description:
        "The cheeseburger to end all cheeseburgers, this melty beast can make you forget the sounds of screaming neighbors on any day of the week. Go ahead, give it a try. Served with pickles, onions, mustard, mayo and ketchup.",
      price: 13.5,
    },
    {
      id: 2,
      title: "fried chicken sandwhich",
      imageUrl:
        "https://assets.bonappetit.com/photos/57acc69553e63daf11a4d9e9/master/pass/iphone-real-fried-chicken-sandwich.jpg",
      description:
        "This fried chicken sandwhich is the glory of the south in between buns. It's even been touted that the dead have risen from their graves just to have a bite. It has been sad that no one has seemed eager to share, though.",
      price: 14.5,
    },
    {
      id: 3,
      title: "salmon burger",
      imageUrl:
        "https://kitchenconfidante.com/wp-content/uploads/2019/10/Thai-Salmon-Burgers-kitchenconfidante.com-2332-750x1124.jpg",
      description:
        "Really, my neighbors are going at it. There's a part of me that says 'Maybe it's just their way of showing passion, I don't know them'. There's another part of me, however, that says it may be domestic violence and there's a possibility it should be reported. I'm very torn. Anyway...this sandwhich is okay. Honestly, salmon is pretty good. But salmon burgers? Usually end up tasting too fishy. This one is dressed simply, with just lettuce and tarter sauce. If you're gonna go fish burger, you may as well do it right.",
      price: 16,
    },
    {
      id: 4,
      title: "thanksgiving sandwhich",
      imageUrl:
        "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Bistro-Turkey-Sandwich_EXPS_SDON17_203868_D06_28_3b.jpg",
      description:
        "If you're the kind of person who wishes they could have Thanksgiving food year round, boy, have I got news for you! That news: this menu is fake, I don't know where you can get this from. However, turkey is sold year round, so I would imagine SOMEONE has it at their restaurant.",
      price: 13,
    },
    {
      id: 5,
      title: "pastrami on rye",
      imageUrl:
        "https://static.onecms.io/wp-content/uploads/sites/19/2009/06/19/grilled-pastrami-su-1906270-x.jpg",
      description:
        "Now here is where STUFF is, you know what I mean? This is the sandwhich to write home about, assuming you get a good one. Shockingly, for a two (we are TRADITIONAL, here, do not add anything other than mustard and pastrami) ingredient sandwhich, it is surprisingly easy to mess up. But if you get a good one? Chef's kiss. I recommend The General Muir, if you, reviewing dev, actually read this. There will be a quiz later.",
      price: 16,
    },
    {
      id: 6,
      title: "classic italian",
      imageUrl:
        "https://pyxis.nymag.com/v1/imgs/d2f/752/16527f42a90954805a89e0623c4bdc9dff-bony-italian-hero-jimmys-famous-heros.h473.w710.jpg",
      description:
        "I think I'll call this one the 'Easter Egg' sandwhich. This is where I'll tell you, assumed reader, that I've actually had a year's-long running joke that I was going to open up a dungeons and dragons themed restaurant. Why? I don't know. I'm not into DND, but you know, I've got to capitalize on those attack rolls, right? It's a sandwhich shop where everything is served on an attack roll. And you get attacked when you order. We are decidedly NOT going to be fans of our customers. But I promise to be a fan of your customers, Popmenu. I promise!",
      price: 12.5,
    },
    {
      id: 7,
      title: "jerk chicken sandwhich",
      imageUrl:
        "https://mycheekykitchen.files.wordpress.com/2020/07/dsc03500.jpg?w=1400",
      description:
        "I really let things slide on actually describing these food items. Now that I think of it, how am I going to let you know that these descriptions are even here? I guess that's a thought for a different day, because presently my head feels like it's full of cotton and there is a slight chance that I had COVID, agh! But I'm pulling through. As one does. You know what? I don't know what this sandwhich is served with in my fake restaurant. Maybe we're purists? Maybe it's literally JUST jerk chicken? It can stand on it's own, so probably. ",
      price: 13.5,
    },
    {
      id: 8,
      title: "philly cheesesteak",
      imageUrl:
        "https://littlesunnykitchen.com/wp-content/uploads/2021/09/Philly-Cheesesteak-4.jpg",
      description: "Steak, onions, peppers, cheese and...mayo?",
      price: 13.5,
    },
  ]);

  const handleDelete = (id) => {
    setItems(items.filter((i) => i.id !== id));
  };

  const handleAdd = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newItem = { id, ...item };
    setItems([...items, newItem]);
  };

  const handleEdit = (item) => {
    setItems(
      items.map((i) =>
        i.id === item.id
          ? {
              id: item.id,
              title: item.title,
              imageUrl: item.imageUrl,
              description: item.description,
              price: item.price,
            }
          : i
      )
    );
  };

  return (
    <Router>
      <Routes>
        <Route
          path={"/"}
          element={
            <styles.MenuPageContainer>
              <MenuOverview
                items={items}
                onDelete={handleDelete}
                onEdit={handleEdit}
                isEditing={false}
              />
            </styles.MenuPageContainer>
          }
        />
        <Route
          path={"/edit"}
          element={
            <styles.MenuPageContainer>
              <MenuOverview
                items={items}
                onDelete={handleDelete}
                onEdit={handleEdit}
                isEditing={true}
              />
            </styles.MenuPageContainer>
          }
        />
        <Route
          path={"/add"}
          element={
            <styles.MenuPageContainer>
              <AddItemForm onAdd={handleAdd} />
            </styles.MenuPageContainer>
          }
        />
      </Routes>
    </Router>
  );
};

export default MenuPage;
