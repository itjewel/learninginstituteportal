import Link from "next/link";

export default function RefundPolicy() {
  return (
    <>
      <div className="bg-gray-50 py-10 px-6 sm:px-10 lg:px-20 text-gray-600">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Refund and Returns Policy</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Policy Overview</h2>
            <p>
              At Ekush Language, we prioritize customer satisfaction. Our refund and returns policy lasts 30 days from the
              date of purchase. If 30 days have passed since your purchase, we are unable to offer a full refund or
              exchange. To be eligible for a return, your item must be unused, in its original condition, and in its
              original packaging.
            </p>
            <p>
              Certain items are exempt from being returned, including but not limited to:
            </p>
            <ul className="list-disc ml-6">
              <li>Digital downloads or online products</li>
              <li>Personalized or custom-made items</li>
              <li>Health and hygiene-related products</li>
            </ul>
            <p>
              To complete your return, you will need to provide proof of purchase (such as a receipt or order number).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Refunds</h2>
            <p>
              Once your return is received and inspected, we will notify you of the approval or rejection of your refund.
              If approved, your refund will be processed, and the credit will be applied to your original payment method
              within a certain number of days.
            </p>
            <p>
              If you have not received your refund after approval, we recommend taking the following steps:
            </p>
            <ul className="list-disc ml-6">
              <li>Check with your bank or credit card provider, as processing times may vary.</li>
              <li>Contact us directly if the issue persists.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Exchanges</h2>
            <p>
              We replace items if they are defective, damaged, or incorrect. If you need to exchange an item, contact us
              at <Link href="mailto:infoekush@gmail.com" className="text-blue-500 underline">infoekush@gmail.com</Link> and include details about your order. Once approved, ship the item to our provided address.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Gifts</h2>
            <p>
              If the item was marked as a gift during purchase and sent directly to you, you will receive a store credit
              for the value of the returned item. If the gift was not marked as such or the sender had the order shipped
              to themselves, we will process the refund to the original purchaser.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Shipping Returns</h2>
            <p>
              If you need to return a product, you are responsible for covering the shipping costs unless the return is
              due to an error on our part. Non-refundable shipping fees may apply. Depending on your location, the time
              it may take for an exchanged product to reach you can vary.
            </p>
            <p>
              We recommend using a trackable shipping service or purchasing shipping insurance for high-value items.
              We cannot guarantee that we will receive your returned item without these precautions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Need Help?</h2>
            <p>
              If you have questions about refunds, exchanges, or returns, don’t hesitate to reach out. Contact us 
              at <Link href="mailto:infoekush@gmail.com" className="text-blue-500 underline">infoekush@gmail.com</Link> for assistance.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
