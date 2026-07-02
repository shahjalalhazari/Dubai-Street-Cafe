import Image from 'next/image';
import SectionHeading from '../shared/SectionHeading';
import { menuData } from '@/data/menu';
import { DirhamSymbol } from 'dirham/react';

const MenuColumn = ({ title, items, styles }) => (
  <div className="space-y-8 lg:space-y-10">
    <h2 className={styles.columnHeading}>{title}</h2>

    <div className="space-y-6 lg:space-y-8">
      {items.map((item) => (
        <article className={styles.menuItem} key={item.id}>
          <div className="relative shrink-0">
            <Image
              src={item.image}
              alt={item.title}
              width={150}
              height={150}
              className={styles.itemImg}
            />
            <div className={styles.itemPriceBox}>
              <span className={styles.itemPrice}>
                <DirhamSymbol size={14} />
                {item.price}
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const MenuSection = () => {
  const styles = {
    menuColumn: "grid gap-16 md:grid-cols-2 mt-10 md:mt-14 lg:mt-20 body-text",
    columnHeading: "text-3xl lg:text-4xl font-bold heading text-(--dark)",
    menuItem: "flex items-center gap-6",
    itemImg: "h-24 w-24 rounded-full object-cover",
    itemPriceBox: "absolute top-[-8] right-[-8] flex h-11 w-11 items-center justify-center rounded-full bg-(--accent)",
    itemPrice: "flex items-center text-base font-medium",
    itemTitle: "text-2xl lg:text-3xl font-bold text-(--dark)",
    itemDescription: "text-sm lg:text-base text-(--body)",

  }

  return (
    <section className='section-container'>
      <SectionHeading 
        title={"Our Specialties"}
        subtitle={"Menu & Pricing"}
      />

      <div className={styles.menuColumn}>
        <MenuColumn
          title="Hot Coffee"
          items={menuData.hotCoffee}
          styles={styles}
        />

        <MenuColumn
          title="Cold Coffee"
          items={menuData.coldCoffee}
          styles={styles}
        />
      </div>
    </section>
  );
};

export default MenuSection;