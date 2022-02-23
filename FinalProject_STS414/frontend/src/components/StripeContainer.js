import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51I8pbmDpzxxYQ427LgC0uv1soRZ7OHkjc1jafE04QLZ8jpQZC0qAk7P1oTg5kbuJ5tHrrNG6Ehyc8HT5agAZ5fME00iiIRpmXT"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}