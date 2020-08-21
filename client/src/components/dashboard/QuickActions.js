import React from 'react'
import QuickActionDonate from './QuickActionDonate'
import QuickActionSearch from './QuickActionSearch'

export const QuickAction = () => {
    return (
        <React.Fragment>
            <div className = "quickaction-list">
                <QuickActionDonate className="quick-action-donate"/>
                <QuickActionSearch  className="quick-action-donate" />
            </div>
        </React.Fragment>
    );

}   