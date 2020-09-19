import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import Hop from "./Hop";
import Recipe from "./Recipe";

@Entity("hops_recipe")
class HopsRecipe {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.hops_recipe)
  @JoinColumn({ name: "recipe_id" })
  recipe_id: Recipe[];

  @ManyToOne(() => Hop, (hop) => hop.recipes_hops)
  @JoinColumn({ name: "hop_id" })
  hop_id: Hop[];

  @Column("decimal")
  hop_quantity: number;

  @Column("decimal")
  hop_add_type: string;

  @Column("int")
  hop_add_time: number;
}

export default HopsRecipe;
