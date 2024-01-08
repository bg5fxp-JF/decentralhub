import "./globals.css";

export const metadata = {
	title: "DeCentral Hub",
	description:
		"A lot of Web3 (Crypto etc)/Web2 (non-crypto) projects & companies are losing customers by poorly made tech. We’re here to help you improve that.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
