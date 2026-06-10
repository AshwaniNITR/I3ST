// PaymentRegistration.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";

interface PaymentRegistrationProps {
  googleFormLink: string;
  qrCodeImageUrl?: string;
}

const PaymentRegistration: React.FC<PaymentRegistrationProps> = ({ 
  googleFormLink, 
  qrCodeImageUrl = "/api/placeholder/300/300"
}) => {
  const [copiedText, setCopiedText] = useState<string>("");

  const bankDetails = {
    accountName: "CONFERENCE NIT ROURKELA",
    accountNumber: "36734418111",
    ifscCode: "SBIN0002109",
    bankName: "State Bank of India",
    branchName: "NIT Campus, Rourkela",
    branchAddress: "NIT Campus, Rourkela, Odisha - 769008",
    micrCode: "769002007",
    swiftCode: "SBININBB137",
    accountType: "Savings",
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(field);
    setTimeout(() => setCopiedText(""), 2000);
  };

  const CopyButton = ({ text, field }: { text: string; field: string }) => (
    <button
      onClick={() => handleCopy(text, field)}
      className="ml-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 inline-flex items-center"
      title="Copy to clipboard"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
        />
      </svg>
    </button>
  );

  return (
    <div className="space-y-8">
      {/* Bank Details Section */}
      <motion.div
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-5">
          <h2 className="text-2xl font-bold text-white text-center">
            Bank Account Details
          </h2>
          <p className="text-blue-200 text-center text-sm mt-1">
            For registration fee transfer
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-500 mb-1">Institution's Account Name (As per bank record)</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-gray-800">
                  {bankDetails.accountName}
                </p>
                <CopyButton text={bankDetails.accountName} field="account-name" />
              </div>
              {copiedText === "account-name" && (
                <p className="text-xs text-green-600 mt-1">Copied!</p>
              )}
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-500 mb-1">Account No.</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-gray-800 font-mono">
                  {bankDetails.accountNumber}
                </p>
                <CopyButton text={bankDetails.accountNumber} field="account-number" />
              </div>
              {copiedText === "account-number" && (
                <p className="text-xs text-green-600 mt-1">Copied!</p>
              )}
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-500 mb-1">IFS Code</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-gray-800 font-mono">
                  {bankDetails.ifscCode}
                </p>
                <CopyButton text={bankDetails.ifscCode} field="ifsc" />
              </div>
              {copiedText === "ifsc" && (
                <p className="text-xs text-green-600 mt-1">Copied!</p>
              )}
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-500 mb-1">Bank Name (in full)</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-gray-800">
                  {bankDetails.bankName}
                </p>
                <CopyButton text={bankDetails.bankName} field="bank-name" />
              </div>
              {copiedText === "bank-name" && (
                <p className="text-xs text-green-600 mt-1">Copied!</p>
              )}
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-500 mb-1">Branch Name</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-gray-800">
                  {bankDetails.branchName}
                </p>
                <CopyButton text={bankDetails.branchName} field="branch-name" />
              </div>
              {copiedText === "branch-name" && (
                <p className="text-xs text-green-600 mt-1">Copied!</p>
              )}
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-500 mb-1">Account Type</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-gray-800">
                  {bankDetails.accountType}
                </p>
                <CopyButton text={bankDetails.accountType} field="account-type" />
              </div>
              {copiedText === "account-type" && (
                <p className="text-xs text-green-600 mt-1">Copied!</p>
              )}
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-500 mb-1">MICR No.</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-gray-800 font-mono">
                  {bankDetails.micrCode}
                </p>
                <CopyButton text={bankDetails.micrCode} field="micr" />
              </div>
              {copiedText === "micr" && (
                <p className="text-xs text-green-600 mt-1">Copied!</p>
              )}
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-gray-500 mb-1">SWIFT Code</p>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold text-gray-800 font-mono">
                  {bankDetails.swiftCode}
                </p>
                <CopyButton text={bankDetails.swiftCode} field="swift" />
              </div>
              {copiedText === "swift" && (
                <p className="text-xs text-green-600 mt-1">Copied!</p>
              )}
            </div>

            <div className="bg-white rounded-lg p-4 border border-blue-200 md:col-span-2">
              <p className="text-sm text-gray-500 mb-1">Complete Branch address</p>
              <div className="flex items-center justify-between">
                <p className="text-base text-gray-700">
                  {bankDetails.branchAddress}
                </p>
                <CopyButton text={bankDetails.branchAddress} field="address" />
              </div>
              {copiedText === "address" && (
                <p className="text-xs text-green-600 mt-1">Copied!</p>
              )}
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-200">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Important Instructions
            </h4>
            <ul className="text-sm text-gray-600 space-y-1 ml-7 list-disc">
              <li>Please mention your <strong>Paper ID</strong> and <strong>Name</strong> in the payment reference</li>
              <li>Screenshot of payment confirmation must be uploaded in the registration form</li>
              <li>International transactions may incur additional bank charges</li>
              <li>Registration is confirmed only after payment verification</li>
              <li>For any payment-related queries, please contact conference treasurer</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* QR Code Section */}
      <motion.div
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-5">
          <h2 className="text-2xl font-bold text-white text-center">
            Scan & Pay
          </h2>
          <p className="text-blue-200 text-center text-sm mt-1">
            Scan QR code for quick payment (UPI)
          </p>
        </div>

        <div className="p-6">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-200">
              <img
                src={qrCodeImageUrl}
                alt="Payment QR Code"
                className="w-64 h-64 object-centre object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Registration Form Section - Button only */}
      <motion.div
        className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl overflow-hidden border border-blue-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-5">
          <h2 className="text-2xl font-bold text-white text-center">
            Registration Form
          </h2>
          <p className="text-blue-200 text-center text-sm mt-1">
            Complete your registration
          </p>
        </div>

        <div className="p-6 text-center">
          <p className="text-lg text-gray-700 mb-4">
            If you have completed the payment, please fill the form below:
          </p>
          
          <a
            href={googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Open Registration Form
          </a>
          
          <p className="text-sm text-gray-500 mt-4">
            The form will open in a new tab. Please have your payment confirmation ready.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default PaymentRegistration;