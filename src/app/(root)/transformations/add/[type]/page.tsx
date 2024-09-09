import Header from "@/components/shared/Header";
import { transformationTypes } from "@/app/constants";
import TransformationForm from "@/components/shared/TransformationForm";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AddTransformationType = async ({
  params: { type },
}: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];
  // console.log('userId AddTransformationType', userId);

  if (!userId) redirect("/sign-in");

  const user = await getUserById(userId);
  // console.log('user AddTransformationType', user);

  return (
    <>
      <Header title={transformation.title} subTitle={transformation.subTitle} />
      <section className="mt-10">
        <TransformationForm
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  );
};

export default AddTransformationType;
